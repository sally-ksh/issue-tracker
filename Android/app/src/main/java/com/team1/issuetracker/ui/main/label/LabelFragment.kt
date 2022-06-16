package com.team1.issuetracker.ui.main.label

import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.databinding.DataBindingUtil
import androidx.fragment.app.Fragment
import androidx.navigation.fragment.findNavController
import com.team1.issuetracker.R
import com.team1.issuetracker.databinding.FragmentIssueBinding
import com.team1.issuetracker.databinding.FragmentLabelBinding

class LabelFragment: Fragment() {

    private lateinit var binding: FragmentLabelBinding

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        binding = DataBindingUtil.inflate(inflater, R.layout.fragment_label, container, false)
        val view = binding.root

        return view
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        binding.topAppBar.setOnMenuItemClickListener {
            when(it.itemId) {
                R.id.action_add -> {
                    Log.d("TAG", "${it.itemId}")
                    findNavController().navigate(R.id.action_navigation_label_to_addLabelFragment)
                    true
                }

                else -> false
            }
        }

    }
}