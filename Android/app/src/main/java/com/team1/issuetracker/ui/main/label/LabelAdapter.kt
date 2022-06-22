package com.team1.issuetracker.ui.main.label

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.DiffUtil
import androidx.recyclerview.widget.ListAdapter
import androidx.recyclerview.widget.RecyclerView
import com.team1.issuetracker.data.model.Label
import com.team1.issuetracker.databinding.ItemLabelBinding

class LabelAdapter: ListAdapter<Label, LabelAdapter.LabelViewHolder>(LabelDiffUtil) {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): LabelViewHolder {
        return LabelViewHolder(ItemLabelBinding.inflate(LayoutInflater.from(parent.context), parent, false))
    }

    override fun onBindViewHolder(holder: LabelViewHolder, position: Int) {
        holder.bind(getItem(position))
    }

    class LabelViewHolder(private val binding: ItemLabelBinding): RecyclerView.ViewHolder(binding.root) {
        fun bind(label: Label) {
            binding.item = label
        }
    }

    private object LabelDiffUtil: DiffUtil.ItemCallback<Label>() {

        override fun areItemsTheSame(oldItem: Label, newItem: Label) =
            oldItem.title == newItem.title

        override fun areContentsTheSame(oldItem: Label, newItem: Label) =
            oldItem == newItem

    }


}