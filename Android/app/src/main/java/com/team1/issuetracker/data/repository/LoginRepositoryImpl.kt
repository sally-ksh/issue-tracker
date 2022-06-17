package com.team1.issuetracker.data.repository

import com.team1.issuetracker.data.AppSession
import com.team1.issuetracker.data.datasource.LoginDataSource
import com.team1.issuetracker.data.dto.toJwt
import com.team1.issuetracker.data.model.Jwt
import javax.inject.Inject
import javax.inject.Singleton

@Singleton
class LoginRepositoryImpl @Inject constructor(
    private val dataSource: LoginDataSource,
    private val appSession: AppSession
) : LoginRepository {
    override suspend fun loadJwt(authenticationCode: String) =
        dataSource.loadJwt(authenticationCode).toJwt()

    override fun saveJwt(jwt: Jwt) {
        appSession.jwt = jwt
    }
}