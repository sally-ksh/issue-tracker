package com.team1.issuetracker.data.datasource

import com.team1.issuetracker.data.dto.JwtDTO
import com.team1.issuetracker.data.network.AuthApi
import javax.inject.Inject
import javax.inject.Singleton

@Singleton
class LoginDataSourceImpl @Inject constructor(
    private val authApi: AuthApi
) : LoginDataSource {
    override suspend fun loadJwt(authenticationCode: String) = authApi.getJwt(authenticationCode)
}