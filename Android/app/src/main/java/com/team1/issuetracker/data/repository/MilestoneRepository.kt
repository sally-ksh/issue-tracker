package com.team1.issuetracker.data.repository

import com.team1.issuetracker.data.model.Milestone
import kotlinx.coroutines.flow.Flow

interface MilestoneRepository {

    fun getMilestone(): Flow<List<Milestone>>
}