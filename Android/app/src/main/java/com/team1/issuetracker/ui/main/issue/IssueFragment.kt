package com.team1.issuetracker.ui.main.issue

import android.graphics.Color
import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.core.content.ContextCompat
import androidx.databinding.DataBindingUtil
import androidx.fragment.app.Fragment
import androidx.navigation.fragment.findNavController
import com.team1.issuetracker.R
import com.team1.issuetracker.common.PrintLog
import com.team1.issuetracker.databinding.FragmentIssueBinding

class IssueFragment: Fragment() {

    private lateinit var binding: FragmentIssueBinding

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        binding = DataBindingUtil.inflate(inflater, R.layout.fragment_issue, container, false)
        val view = binding.root
        return view
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        setAppBar()
    }

    private fun setAppBar(){
        binding.topAppBar.setOnMenuItemClickListener {
            when(it.itemId) {
                R.id.issue_search -> {
                    PrintLog.printLog("issue search")
                    true
                }
                else -> false
            }
        }

//        binding.topAppBar.setNavigationOnClickListener {
//            PrintLog.printLog("issue filter")
//            if (binding.cloFilterLayout.visibility == View.VISIBLE) {
//                binding.cloFilterLayout.visibility = View.GONE
//                binding.imgMore1.animate().setDuration(200).rotation(180f)
//            } else {
//                binding.cloFilterLayout.visibility = View.VISIBLE
//                binding.imgMore1.animate().setDuration(200).rotation(0f)
//                changeAppbar()
//            }
//        }
    }

    private fun changeAppbar() {
        binding.topAppBar.setBackgroundColor(ContextCompat.getColor(requireContext(), R.color.Primary1))
        binding.topAppBar.inflateMenu(R.menu.filter_appbar_menu)
        binding.topAppBar.title = "필터"
        binding.topAppBar.setTitleTextColor(R.color.white)
        binding.topAppBar.navigationIcon = ContextCompat.getDrawable(requireContext(), R.drawable.ic_cancel)
    }
}