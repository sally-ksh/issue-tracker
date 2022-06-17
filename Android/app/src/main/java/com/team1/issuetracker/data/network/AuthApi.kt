package com.team1.issuetracker.data.network

import com.team1.issuetracker.data.dto.JwtDTO
import retrofit2.http.GET
import retrofit2.http.Query

interface AuthApi {

    @GET("/auth/github")
    suspend fun getJwt(
        @Query("code") authenticationCode: String
    ): JwtDTO
}