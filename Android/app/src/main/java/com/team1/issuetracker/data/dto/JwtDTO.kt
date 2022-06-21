package com.team1.issuetracker.data.dto

import com.team1.issuetracker.data.model.Jwt

data class JwtDTO(
    val accessToken: String?,
    val refreshToken: String?
)

fun JwtDTO.toJwt() = Jwt(
    accessToken = requireNotNull(accessToken),
    refreshToken = requireNotNull(refreshToken)
)