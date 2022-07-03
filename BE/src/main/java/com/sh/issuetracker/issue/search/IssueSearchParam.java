package com.sh.issuetracker.issue.search;

import com.sh.issuetracker.exception.NoneSearchParamException;
import com.sh.issuetracker.issue.IssueStatus;

import org.apache.logging.log4j.util.Strings;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class IssueSearchParam {
	private static final String REGEX_MIDDLE_KEY_SEPARATOR = "[+](.*?)[:]";
	private static final String REGEX_MIDDLE_VALUE_SEPARATOR = "[:](.*?)[+]";

	private IssueStatus status;
	private String author;
	private String assignee;
	private String milestoneTitle;
	private String labelName;

	public static IssueSearchParam from(IssueSearchRequest request) {
		String text = request.getText();
		int firstKeySeparatorIdx = text.indexOf('+');
		String front = text.substring(0, firstKeySeparatorIdx);
		String behindSearchWords = text.substring(firstKeySeparatorIdx);
		SearchWordMap searchWords = new SearchWordMap();

		toMap(searchWords, behindSearchWords);

		IssueSearchParam param = new IssueSearchParam();
		param.status = toIssueStatus(front);
		param.author = searchWords.get(SearchKeyType.AUTHOR);
		param.assignee = searchWords.get(SearchKeyType.ASSIGNEE);
		param.milestoneTitle = searchWords.get(SearchKeyType.MILESTONE);
		param.labelName = searchWords.get(SearchKeyType.LABEL);
		return param;
	}

	private static void toMap(
		SearchWordMap searchWords,
		String behindSearchWords) {
		Pattern patternOfKey = Pattern.compile(REGEX_MIDDLE_KEY_SEPARATOR);
		Pattern patternOfValue = Pattern.compile(REGEX_MIDDLE_VALUE_SEPARATOR);
		Matcher matcherOfKey = patternOfKey.matcher(behindSearchWords);
		Matcher matcherOfValue = patternOfValue.matcher(behindSearchWords);

		while (matcherOfKey.find() && matcherOfValue.find()) {
			String key = matcherOfKey.group(1);
			String value = matcherOfValue.group(1);
			if (key == null || value == null) {
				break;
			}
			invalidOf(key, value);
			searchWords.add(SearchKeyType.getKey(key), trimComma(value));
		}

		String lastKey = matcherOfKey.group(1);
		String lastValue = behindSearchWords.substring(behindSearchWords.lastIndexOf(':') + 1);
		searchWords.add(SearchKeyType.getKey(lastKey), trimComma(lastValue));
	}

	private static String trimComma(String text) {
		return (text.indexOf('\"') == -1) ? text : text.replaceAll("\"", "");
	}

	private static void invalidOf(String key, String value) {
		if (!SearchKeyType.hasKey(key)) {
			throw new NoneSearchParamException("IssueSearchParam - toKeys() , invalid key : " + key);
		}
		if (SearchKeyType.AUTHOR.equals(key) && SearchKeyType.NONE.equals(value)) {
			throw new NoneSearchParamException("IssueSearchParam - toKeys(), invalid search word");
		}
	}

	/**
	 * 이슈 상태 키워드는 OPEN을 기본으로 조회 처리한다.
	 * 단, 사용자로부터 요청받은 이슈상태 검색값 불일치는 조회 처리하지 않는다.
	 * @param text
	 * @return
	 */
	private static IssueStatus toIssueStatus(String text) {
		if (text.startsWith("is")) {
			String issueStatusValue = text.substring(text.indexOf(':') + 1);
			if (!IssueStatus.hasValue(issueStatusValue)) {
				throw new NoneSearchParamException("허용되지 않는 이슈 겁색어로 검색 요청");
			}
			return IssueStatus.from(issueStatusValue);
		}
		return IssueStatus.OPEN;
	}

	public IssueStatus status() {
		return this.status;
	}

	public String author() {
		return this.author;
	}

	public String milestoneTitle() {
		return this.milestoneTitle;
	}

	public String labelName() {
		return this.labelName;
	}

	public String assignee() {
		return assignee;
	}

	public boolean isNoneOrSearchedForLabel() {
		return SearchKeyType.isNone(this.labelName) || !Strings.isBlank(this.labelName);
	}
}
