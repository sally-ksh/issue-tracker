package com.team1.issuetracker.ui.main.issue

import androidx.lifecycle.ViewModel
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import javax.inject.Inject

@HiltViewModel
class IssueViewModel @Inject constructor(): ViewModel() {

    private val _itemCount: MutableStateFlow<Int> = MutableStateFlow<Int>(1)
    val itemCount: StateFlow<Int> = _itemCount

    fun countUp(){
        _itemCount.value += 1
    }
}