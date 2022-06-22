package com.team1.issuetracker.ui.main.label

import android.os.Bundle
import android.util.Log
import android.view.*
import androidx.appcompat.view.ActionMode
import androidx.databinding.DataBindingUtil
import androidx.fragment.app.Fragment
import androidx.fragment.app.viewModels
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.lifecycleScope
import androidx.lifecycle.repeatOnLifecycle
import androidx.navigation.fragment.findNavController
import androidx.recyclerview.widget.ItemTouchHelper
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.SimpleItemAnimator
import com.team1.issuetracker.R
import com.team1.issuetracker.common.PrintLog
import com.team1.issuetracker.databinding.FragmentLabelBinding
import com.team1.issuetracker.ui.main.MainActivity
import com.team1.issuetracker.common.SwipeHelper
import dagger.hilt.android.AndroidEntryPoint
import kotlinx.coroutines.launch

@AndroidEntryPoint
class LabelFragment : Fragment() {

    private lateinit var binding: FragmentLabelBinding
    private lateinit var labelAdapter: LabelAdapter

    private var actionMode: ActionMode? = null

    private val viewModel: LabelViewModel by viewModels()

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

        val callback = object : ActionMode.Callback {
            override fun onCreateActionMode(mode: ActionMode?, menu: Menu?): Boolean {
                Log.d("AppTest", "onCreateActionMode")
                requireActivity().menuInflater.inflate(R.menu.contextual_action_bar, menu)
                return true
            }

            override fun onPrepareActionMode(mode: ActionMode?, menu: Menu?): Boolean {
                Log.d("AppTest", "onPrepareActionMode")
                return false
            }

            override fun onActionItemClicked(mode: ActionMode?, item: MenuItem?): Boolean {
                return when (item?.itemId) {
                    R.id.delete -> {
                        // Handle delete icon press
                        true
                    }
                    R.id.close -> {
                        // Handle close icon press
                        true
                    }
                    else -> false
                }
            }

            override fun onDestroyActionMode(mode: ActionMode?) {
                Log.d("AppTest", "onDestroyActionMode")
                actionMode = null

                labelAdapter.makeCheckBoxGone() // 모든 아이템 체크박스 보이지 않도록
            }
        }

        setAppBar()


        val swipeHelper = LabelSwipeHelper()
        val itemTouchHelper = ItemTouchHelper(swipeHelper)
        itemTouchHelper.attachToRecyclerView(binding.rvLabel)

        labelAdapter = LabelAdapter {
            PrintLog.printLog("Issue Item Long Click")    // 이슈 리스트 아이템 롱 클릭 이벤트 영역!!

            actionMode = (activity as MainActivity).startSupportActionMode(callback)  // ? 맞는 방법
            actionMode?.let {
//                it.title = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N)
//                    Html.fromHtml(
//                        "<font color='#FFFFFF'>${viewModel.itemCount.value}</font>",
//                        Html.FROM_HTML_MODE_LEGACY
//                    )
//                else
//                    Html.fromHtml("<font color='#FFFFFF'>${viewModel.itemCount.value}</font>")
            }

            itemTouchHelper.attachToRecyclerView(null) // 체크 박스 활성화 상태에서는 스와이프 안되게
            labelAdapter.makeCheckBoxVisible() // 모든 아이템 체크박스 보이도록
        }

        binding.rvLabel.apply {
            adapter = labelAdapter
            layoutManager = LinearLayoutManager(requireContext())
            setOnTouchListener { v, event ->
                swipeHelper.removePreviousClamp(this)
                v.performClick()
                false
            }
        }

        val animator = binding.rvLabel.itemAnimator     //리사이클러뷰 애니메이터 get
        if (animator is SimpleItemAnimator) {          //아이템 애니메이커 기본 하위클래스
            animator.supportsChangeAnimations =
                false  //애니메이션 값 false (리사이클러뷰가 화면을 다시 갱신 했을때 뷰들의 깜빡임 방지)
        }

        lifecycleScope.launch {
            repeatOnLifecycle(Lifecycle.State.STARTED) {
                viewModel.labelList.collect {
                    labelAdapter.submitList(it.toList())
                }
            }
        }

        binding.topAppBar.setOnMenuItemClickListener {
            when (it.itemId) {
                R.id.action_add -> {
                    Log.d("TAG", "${it.itemId}")
                    findNavController().navigate(R.id.action_navigation_label_to_addLabelFragment)
                    true
                }

                else -> false
            }
        }

    }

    private fun setAppBar() {
        binding.topAppBar.setOnMenuItemClickListener {
            when (it.itemId) {
                R.id.issue_search -> {
                    PrintLog.printLog("issue search")
                    true
                }
                else -> false
            }
        }
    }

}