package com.team1.issuetracker.data.repository

import com.team1.issuetracker.data.datasource.LabelDataSource
import com.team1.issuetracker.data.model.Label
import kotlinx.coroutines.flow.Flow
import javax.inject.Inject
import javax.inject.Singleton

@Singleton
class LabelRepositoryImpl @Inject constructor(private val dataSource: LabelDataSource) : LabelRepository {

    override fun getLabel() = dataSource.getLabel()

}