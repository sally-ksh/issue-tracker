package com.team1.issuetracker.data.repository

import com.team1.issuetracker.data.model.Label
import kotlinx.coroutines.flow.Flow

interface LabelRepository {

    fun getLabel() : Flow<List<Label>>
}