package com.team1.issuetracker.ui.login

import android.util.Log
import androidx.lifecycle.LiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.team1.issuetracker.common.SingleLiveEvent
import com.team1.issuetracker.data.repository.LoginRepository
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.CoroutineExceptionHandler
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class LoginViewModel @Inject constructor(
    private val repository: LoginRepository
) : ViewModel() {
    private val _jwtLoadCompleteEvent = SingleLiveEvent<Nothing>()
    val jwtLoadCompleteEvent: LiveData<Nothing> get() = _jwtLoadCompleteEvent

    private val _error = SingleLiveEvent<String>()
    val error: LiveData<String> get() = _error
    private val ceh = CoroutineExceptionHandler { _, _ ->
        _error.value = "네트워크 연결 실패"
    }

    fun loadJwt(authenticationCode: String) {
        viewModelScope.launch(ceh) {
            val jwt = repository.loadJwt(authenticationCode)
            Log.d("TAG", "jwt $jwt")
            repository.saveJwt(jwt)
            _jwtLoadCompleteEvent.call()
        }
    }
}

