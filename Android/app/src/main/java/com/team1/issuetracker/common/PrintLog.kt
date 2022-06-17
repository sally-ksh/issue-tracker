package com.team1.issuetracker.common

import android.util.Log

object PrintLog {
    fun printLog(msg: String){
        Log.d("TAG", "$msg")
    }
}