package com.team1.issuetracker.ui.main

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.databinding.DataBindingUtil
import androidx.navigation.fragment.findNavController
import androidx.navigation.ui.setupWithNavController
import com.team1.issuetracker.R
import com.team1.issuetracker.databinding.ActivityLoginBinding
import com.team1.issuetracker.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = DataBindingUtil.setContentView(this, R.layout.activity_main)

        binding.bottomNavigation.itemIconTintList = null
        val navController = supportFragmentManager.findFragmentById(R.id.container)?.findNavController()
        navController?.let{
            binding.bottomNavigation.setupWithNavController(it)
        }

    }

}