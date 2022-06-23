package com.team1.issuetracker.ui.main.milestone.adapter

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
import com.team1.issuetracker.data.model.Label
import com.team1.issuetracker.data.model.Milestone
import com.team1.issuetracker.databinding.ItemMilestoneBinding

class MilestoneAdapter(private val longClick: () -> Unit) :
    ListAdapter<Milestone, MilestoneAdapter.MilestoneViewHolder>(MilestoneDiffUtil) {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): MilestoneViewHolder {
        return MilestoneViewHolder(
            ItemMilestoneBinding.inflate(
                LayoutInflater.from(parent.context),
                parent,
                false
            )
        )
    }

    override fun onBindViewHolder(holder: MilestoneViewHolder, position: Int) {
        holder.bind(getItem(position))
    }

    inner class MilestoneViewHolder(private val binding: ItemMilestoneBinding) :
        RecyclerView.ViewHolder(binding.root) {
        fun bind(milestone: Milestone) {
            binding.item = milestone

            binding.clCheckbox.isVisible = milestone.isCheckVisible

            if (milestone.isSwiped) binding.milestoneView.translationX =
                binding.root.width * -1f / 10 * 3
            else binding.milestoneView.translationX = 0f

            binding.eraseItemView.setOnClickListener {
                if (milestone.isSwiped) removeItem(adapterPosition)
            }

            binding.checkbox.setOnCheckedChangeListener { buttonView, isChecked ->
                if (isChecked) {
                    getItem(adapterPosition).isChecked = true
                    binding.milestoneView.setBackgroundColor(
                        ContextCompat.getColor(
                            binding.root.context,
                            R.color.Backgrounds2
                        )
                    )
                } else {
                    getItem(adapterPosition).isChecked = false
                    binding.milestoneView.setBackgroundColor(
                        ContextCompat.getColor(
                            binding.root.context,
                            R.color.white
                        )
                    )
                }
            }

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

    fun removeItem(position: Int) {  // currentList에서 바로 아이템 지우면 에러 발생
        val newList = currentList.toMutableList()
        newList.removeAt(position)

        newList.forEach {
            it.isSwiped = false
        } // 한 아이템 삭제 시 다른 아이템들 모두 스와이프x 상태 처리하기 위함

        submitList(newList.toList())
    }

    fun makeCheckBoxVisible() {
        val newList = ArrayList<Milestone>()
        currentList.forEach {
            newList.add(
                Milestone(
                    id = it.id,
                    title = it.title,
                    progress = it.progress,
                    content = it.content,
                    date = it.date,
                    open = it.open,
                    closed = it.closed,
                    isCheckVisible = true
                )
            )
        }
        submitList(newList.toList())
    }

    fun makeCheckBoxGone() {
        val newList = ArrayList<Milestone>()
        currentList.forEach {
            newList.add(
                Milestone(
                    id = it.id,
                    title = it.title,
                    progress = it.progress,
                    content = it.content,
                    date = it.date,
                    open = it.open,
                    closed = it.closed,
                    isCheckVisible = true
                )
            )
        }
        submitList(newList.toList())

    }

    private object MilestoneDiffUtil : DiffUtil.ItemCallback<Milestone>() {

        override fun areItemsTheSame(oldItem: Milestone, newItem: Milestone) =
            oldItem.id == newItem.id

        override fun areContentsTheSame(oldItem: Milestone, newItem: Milestone) =
            oldItem == newItem

    }


}