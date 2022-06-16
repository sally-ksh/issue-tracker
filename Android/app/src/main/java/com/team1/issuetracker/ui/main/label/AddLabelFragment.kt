package com.team1.issuetracker.ui.main.label

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import com.team1.issuetracker.databinding.FragmentAddLabelBinding

class AddLabelFragment: Fragment() {

    private lateinit var binding: FragmentAddLabelBinding

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        binding = FragmentAddLabelBinding.inflate(layoutInflater)
        val view = binding.root
        return view
    }


}