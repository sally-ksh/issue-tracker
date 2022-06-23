package com.team1.issuetracker.data.datasource

import com.team1.issuetracker.data.model.Label
import kotlinx.coroutines.flow.Flow

interface LabelDataSource {

    fun getLabel() : Flow<List<Label>>
}