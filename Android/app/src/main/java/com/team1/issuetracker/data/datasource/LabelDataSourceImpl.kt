package com.team1.issuetracker.data.datasource

import com.team1.issuetracker.data.model.Label
import com.team1.issuetracker.data.network.LabelApi
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.flow
import javax.inject.Inject
import javax.inject.Singleton

@Singleton
class LabelDataSourceImpl @Inject constructor(api: LabelApi): LabelDataSource {

    private val sample = listOf<Label>(
        Label(0, "#808080", "Label", "샘플용 Label")
    )
    override fun getLabel() = flow {
        emit(sample)
    }
}