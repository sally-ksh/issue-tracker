package com.team1.issuetracker.ui.main.milestone

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.databinding.DataBindingUtil
import androidx.fragment.app.Fragment
import com.team1.issuetracker.R
import com.team1.issuetracker.databinding.FragmentIssueBinding
import com.team1.issuetracker.databinding.FragmentMilestoneBinding

class MileStoneFragment: Fragment() {

    private lateinit var binding: FragmentMilestoneBinding

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        binding = DataBindingUtil.inflate(inflater, R.layout.fragment_milestone, container, false)
        val view = binding.root

        return view
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)


    }
}