package com.team1.issuetracker.ui.login

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.util.Log
import android.view.Menu
import android.widget.Toast
import androidx.activity.viewModels
import androidx.appcompat.app.AppCompatActivity
import androidx.browser.customtabs.CustomTabsIntent
import androidx.databinding.DataBindingUtil
import androidx.navigation.findNavController
import com.team1.issuetracker.R
import com.team1.issuetracker.databinding.ActivityLoginBinding
import com.team1.issuetracker.ui.main.MainActivity
import dagger.hilt.android.AndroidEntryPoint

@AndroidEntryPoint
class LoginActivity : AppCompatActivity() {

    private lateinit var binding: ActivityLoginBinding

    private val viewModel: LoginViewModel by viewModels()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = DataBindingUtil.setContentView(this, R.layout.activity_login)
        setTempMove()
        setupObservers()
    }

    private fun setTempMove() {
        binding.btnGithubLogin.setOnClickListener {
//            startActivity(Intent(this, MainActivity::class.java))
            login()
        }

        binding.btnGoogleLogin.setOnClickListener {
            startActivity(Intent(this, MainActivity::class.java))
        }
    }

    private fun login() {
        val context = this ?: return

        val uri = Uri.Builder()
            .scheme("http")
            .authority("github.com")
            .appendPath("login")
            .appendPath("oauth")
            .appendPath("authorize")
            .appendQueryParameter("client_id", getString(R.string.github_client_id))
            .appendQueryParameter("redirect_uri", getString(R.string.github_redirect_url))
            .build()

        CustomTabsIntent.Builder()
            .build()
            .launchUrl(context, uri)
    }

    private fun setupObservers() {
        viewModel.jwtLoadCompleteEvent.observe(this) {
            startActivity(Intent(this, MainActivity::class.java))
        }
        viewModel.error.observe(this) {
            Toast.makeText(this, it, Toast.LENGTH_SHORT).show()
        }
    }

    override fun onNewIntent(intent: Intent?) {
        super.onNewIntent(intent)
        val code = intent?.data?.getQueryParameter("code") ?: return
        Log.d("TAG","code ${code}")
        viewModel.loadJwt(code)
    }
}