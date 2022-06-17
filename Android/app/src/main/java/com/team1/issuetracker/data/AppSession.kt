package com.team1.issuetracker.data

import com.team1.issuetracker.data.model.Jwt
import javax.inject.Inject
import javax.inject.Singleton

@Singleton
class AppSession @Inject constructor() {
    var jwt: Jwt? = null
}