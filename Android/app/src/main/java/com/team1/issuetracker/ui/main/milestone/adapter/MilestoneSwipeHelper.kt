package com.team1.issuetracker.ui.main.milestone.adapter

import android.view.View
import androidx.recyclerview.widget.RecyclerView
import com.team1.issuetracker.R
import com.team1.issuetracker.common.SwipeHelper
import com.team1.issuetracker.ui.main.label.adapter.LabelAdapter

class MilestoneSwipeHelper: SwipeHelper() {
    override fun getView(viewHolder: RecyclerView.ViewHolder): View {
        return (viewHolder as MilestoneAdapter.MilestoneViewHolder).itemView.findViewById(R.id.milestone_view) // 아이템뷰에서 스와이프 영역에 해당하는 뷰 가져오기
    }

    override fun setClamped(viewHolder: RecyclerView.ViewHolder, isClamped: Boolean){
        viewHolder as MilestoneAdapter.MilestoneViewHolder
        viewHolder.setClamped(isClamped)
    }

    override fun getClamped(viewHolder: RecyclerView.ViewHolder): Boolean{
        viewHolder as MilestoneAdapter.MilestoneViewHolder
        return viewHolder.getClamped()
    }
}