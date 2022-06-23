package com.team1.issuetracker.data.model

data class Jwt(
    val accessToken: String,
    val refreshToken: String,
)
