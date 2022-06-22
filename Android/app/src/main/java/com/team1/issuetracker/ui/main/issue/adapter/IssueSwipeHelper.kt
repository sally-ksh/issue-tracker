package com.team1.issuetracker.ui.main.issue.adapter

import android.view.View
import androidx.recyclerview.widget.RecyclerView
import com.team1.issuetracker.R
import com.team1.issuetracker.common.SwipeHelper

class IssueSwipeHelper: SwipeHelper() {

    override fun getView(viewHolder: RecyclerView.ViewHolder): View {
        return (viewHolder as IssueListAdapter.IssueViewHolder).itemView.findViewById(R.id.swipe_view) // 아이템뷰에서 스와이프 영역에 해당하는 뷰 가져오기
    }

    override fun setClamped(viewHolder: RecyclerView.ViewHolder, isClamped: Boolean){
        viewHolder as IssueListAdapter.IssueViewHolder
        viewHolder.setClamped(isClamped)
    }

    override fun getClamped(viewHolder: RecyclerView.ViewHolder): Boolean{
        viewHolder as IssueListAdapter.IssueViewHolder
        return viewHolder.getClamped()
    }
}