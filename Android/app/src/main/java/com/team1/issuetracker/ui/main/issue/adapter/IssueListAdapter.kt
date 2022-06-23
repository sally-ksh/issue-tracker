package com.team1.issuetracker.ui.main.issue.adapter

import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.core.content.ContextCompat
import androidx.core.view.isVisible
import androidx.recyclerview.widget.DiffUtil
import androidx.recyclerview.widget.ListAdapter
import androidx.recyclerview.widget.RecyclerView
import com.team1.issuetracker.R
import com.team1.issuetracker.common.IssueState
import com.team1.issuetracker.common.PrintLog
import com.team1.issuetracker.data.model.Issue
import com.team1.issuetracker.databinding.ItemIssueBinding

class IssueListAdapter(
    private val longClick: () -> Unit,
    private val itemCheck: (Int) -> Unit,
    private val closeSwiped: (Int) -> Unit
) :
    ListAdapter<Issue, IssueListAdapter.IssueViewHolder>(IssueDiffUtil) {

    inner class IssueViewHolder(private val binding: ItemIssueBinding) :
        RecyclerView.ViewHolder(binding.root) {

        fun bind(issue: Issue, longClick: () -> Unit, itemCheck: (Int) -> Unit, closeSwiped: (Int) -> Unit) {
            Log.d("AppTest", "bind")
            binding.clCheckbox.isVisible = issue.isCheckVisible
            binding.issue = issue


            // 뷰홀더 재사용 과정에서 isClamped 값에 맞지 않는 스와이프 상태가 보일 수 있으므로 아래와 같이 명시적으로 isClamped 값에 따라 스와이프 상태 지정
            if (issue.isSwiped) binding.swipeView.translationX = binding.root.width * -1f / 10 * 3
            else binding.swipeView.translationX = 0f

            binding.eraseItemView.setOnClickListener {
                if (issue.isSwiped) closeSwiped.invoke(getItem(adapterPosition).issueId)
            }

            // 체크 여부에 따른 배경색 설정
            if (issue.isChecked) {
                binding.checkbox.isChecked = true
                binding.swipeView.setBackgroundColor(
                    ContextCompat.getColor(
                        binding.root.context,
                        R.color.Backgrounds2
                    )
                )
            } else {
                binding.checkbox.isChecked = false
                binding.swipeView.setBackgroundColor(
                    ContextCompat.getColor(
                        binding.root.context,
                        R.color.white
                    )
                )
            }

            binding.checkbox.setOnClickListener {
                if(binding.checkbox.isChecked){
                    PrintLog.printLog("checked")
                    getItem(adapterPosition).isChecked = true
                    binding.swipeView.setBackgroundColor(
                        ContextCompat.getColor(
                            binding.root.context,
                            R.color.Backgrounds2
                        )
                    )
                }
                else{
                    PrintLog.printLog("unchecked")
                    getItem(adapterPosition).isChecked = false
                    binding.swipeView.setBackgroundColor(
                        ContextCompat.getColor(
                            binding.root.context,
                            R.color.white
                        )
                    )
                }
                itemCheck.invoke(adapterPosition) // IssueFragment에서 뷰모델과 연결된다
            }
            // 직접 체크 박스 클릭하는 경우만 고려하기 위해 setOnCheckedChangeListener 대신 onClickListene 사용


            binding.root.setOnLongClickListener(View.OnLongClickListener {
                val pos = adapterPosition
                Log.d("AppTest", "long click pos : $pos")

                longClick.invoke()

                return@OnLongClickListener true
            })
        }

        fun setClamped(isClamped: Boolean) {
            getItem(adapterPosition).isSwiped = isClamped
        }

        fun getClamped(): Boolean {
            return getItem(adapterPosition).isSwiped
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): IssueViewHolder {
        val binding = ItemIssueBinding.inflate(LayoutInflater.from(parent.context), parent, false)
        return IssueViewHolder(binding)
    }

    override fun onBindViewHolder(holder: IssueViewHolder, position: Int) {
        holder.bind(getItem(position), longClick, itemCheck, closeSwiped)
    }

    fun removeItem(position: Int) {  // currentList에서 바로 아이템 지우면 에러 발생
        val newList = currentList.toMutableList()
        newList.removeAt(position)

        newList.forEach {
            it.isSwiped = false
        } // 한 아이템 삭제 시 다른 아이템들 모두 스와이프x 상태 처리하기 위함

        submitList(newList.toList())
    }

    fun makeCheckBosVisible() {
        val newList = ArrayList<Issue>()
        currentList.forEach {
            newList.add(
                Issue(
                    it.issueId,
                    it.mileStone,
                    it.title,
                    it.content,
                    it.labelContent,
                    it.labelColor,
                    false,
                    true
                )
            )
        }
        submitList(newList.toList())
    }

    fun makeCheckBoxGone() {
        val newList = ArrayList<Issue>()
        currentList.forEach {
            newList.add(
                Issue(
                    it.issueId,
                    it.mileStone,
                    it.title,
                    it.content,
                    it.labelContent,
                    it.labelColor,
                    false,
                    false,
                    false
                )
            )
        }
        submitList(newList.toList())
    }


    companion object IssueDiffUtil : DiffUtil.ItemCallback<Issue>() {

        override fun areItemsTheSame(oldItem: Issue, newItem: Issue) =
            oldItem.issueId == oldItem.issueId

        override fun areContentsTheSame(oldItem: Issue, newItem: Issue) =
            oldItem == newItem

    }
}