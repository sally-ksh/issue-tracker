package com.team1.issuetracker.data.repository

import com.team1.issuetracker.data.datasource.LabelDataSource
import com.team1.issuetracker.data.datasource.MilestoneDataSource
import com.team1.issuetracker.data.model.Milestone
import kotlinx.coroutines.flow.Flow
import javax.inject.Inject
import javax.inject.Singleton

@Singleton
class MilestoneRepositoryImpl @Inject constructor(private val dataSource: MilestoneDataSource) : MilestoneRepository {
    override fun getMilestone() = dataSource.getMilestone()
}