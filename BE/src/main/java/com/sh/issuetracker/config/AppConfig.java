package com.sh.issuetracker.config;

import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.web.client.RestTemplate;

@Configuration
public class AppConfig {
	@Bean
	public RestTemplate restTemplate() {
		HttpComponentsClientHttpRequestFactory clientHttpRequestFactory
			= new HttpComponentsClientHttpRequestFactory();
		// Connection 수 제한
		CloseableHttpClient httpClient = HttpClientBuilder.create()
			.setMaxConnTotal(50)
			.setMaxConnPerRoute(20)
			.build();
		clientHttpRequestFactory.setHttpClient(httpClient);
		//Connect timeout
		clientHttpRequestFactory.setConnectTimeout(2000);
		//Read timeout
		clientHttpRequestFactory.setReadTimeout(5000);
		return new RestTemplate(clientHttpRequestFactory);
	}
}
