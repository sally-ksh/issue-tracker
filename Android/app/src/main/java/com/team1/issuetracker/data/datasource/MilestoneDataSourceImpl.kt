package com.team1.issuetracker.data.datasource

import com.team1.issuetracker.data.model.Milestone
import com.team1.issuetracker.data.network.MilestoneApi
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.flow
import javax.inject.Inject
import javax.inject.Singleton

@Singleton
class MilestoneDataSourceImpl @Inject constructor(private val api: MilestoneApi) :
    MilestoneDataSource {

    private val sample = listOf(
        Milestone(0, "제목1", 30, "설명", "2022-12-11", 3, 4),
        Milestone(1, "제목2", 50, "설명", "2022-12-11", 3, 4),
        Milestone(2, "제목3", 20, "설명", "2022-12-11", 3, 4)
    )

    override fun getMilestone() = flow {
        emit(sample)
    }
}
