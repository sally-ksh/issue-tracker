package com.team1.issuetracker.ui.main.label

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.team1.issuetracker.data.model.Label
import com.team1.issuetracker.data.repository.LabelRepository
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class LabelViewModel @Inject constructor(private val repository: LabelRepository) : ViewModel() {

    private val _labelList = MutableStateFlow<List<Label>>(emptyList())
    val labelList = _labelList

    init {
        getLabel()
    }

    private fun getLabel() {
        viewModelScope.launch {
            repository.getLabel().collect{
                _labelList.value = it
            }
        }
    }
}