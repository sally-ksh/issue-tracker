package com.team1.issuetracker.data.repository

import com.team1.issuetracker.data.model.Jwt

interface LoginRepository {

    suspend fun loadJwt(authenticationCode: String): Jwt

    fun saveJwt(jwt: Jwt)
}