package com.team1.issuetracker.data.datasource

import com.team1.issuetracker.data.dto.JwtDTO

interface LoginDataSource {
    suspend fun loadJwt(authenticationCode: String): JwtDTO
}
