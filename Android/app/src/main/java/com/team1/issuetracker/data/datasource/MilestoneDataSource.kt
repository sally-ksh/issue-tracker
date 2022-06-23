package com.team1.issuetracker.data.datasource

import com.team1.issuetracker.data.model.Milestone
import kotlinx.coroutines.flow.Flow

interface MilestoneDataSource {

    fun getMilestone(): Flow<List<Milestone>>
}
