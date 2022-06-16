package com.team1.issuetracker.ui.main

import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.databinding.DataBindingUtil
import com.team1.issuetracker.R
import com.team1.issuetracker.databinding.ActivityLoginBinding

class LoginActivity : AppCompatActivity() {

    private lateinit var binding: ActivityLoginBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = DataBindingUtil.setContentView(this, R.layout.activity_login)
        setTempMove()
    }

    private fun setTempMove() {
        binding.btnGithubLogin.setOnClickListener {
            startActivity(Intent(this, MainActivity::class.java))
        }
    }
}