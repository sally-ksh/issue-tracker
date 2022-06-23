package com.team1.issuetracker.ui.main.issue

import androidx.lifecycle.ViewModel
import com.team1.issuetracker.common.IssueState
import com.team1.issuetracker.common.PrintLog
import com.team1.issuetracker.data.model.Issue
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import javax.inject.Inject

@HiltViewModel
class IssueViewModel @Inject constructor(): ViewModel() {

    private val _itemCount: MutableStateFlow<Int> = MutableStateFlow<Int>(0)
    val itemCount: StateFlow<Int> = _itemCount

    private val _issueList: MutableStateFlow<List<Issue>> = MutableStateFlow<List<Issue>>(emptyList())
    val issueList: StateFlow<List<Issue>> = _issueList

    private val sampleOriginIssueList = ArrayList<Issue>()
    private val checkedSet: MutableSet<Int> = mutableSetOf()

    init {
        addSampleIssueData()
    }

    fun checkItem(inx: Int){
        if(checkedSet.contains(inx)) checkedSet.remove(inx)
        else checkedSet.add(inx)

        _itemCount.value = checkedSet.size
    }

    fun checkedSetClear(){
        checkedSet.clear()
        _itemCount.value = 0
        PrintLog.printLog("itemCount, ${itemCount.value}")
    }

    private fun addSampleIssueData(){

        val tempList = ArrayList<Issue>()

        sampleOriginIssueList.add(Issue(-1, "마일스톤0", "title 0", "content 0", "label0", "", false, false, false, IssueState.CloseRequested))
        sampleOriginIssueList.add(Issue(0, "마일스톤1", "title 1", "content 1", "label1", "", false, false, false, IssueState.CloseRequested))
        for(i in 1..15){
            sampleOriginIssueList.add(Issue(i, "마일스톤$i", "title $i", "content $i", "label$i", ""))
        }

        sampleOriginIssueList.forEach {
            if(it.issueState == IssueState.Open) tempList.add(it)
        }

        _issueList.value = tempList
    }
}