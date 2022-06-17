package com.team1.issuetracker.data.di

import com.team1.issuetracker.data.repository.LoginRepository
import com.team1.issuetracker.data.repository.LoginRepositoryImpl
import dagger.Binds
import dagger.Module
import dagger.hilt.InstallIn
import dagger.hilt.components.SingletonComponent
import javax.inject.Singleton

@Module
@InstallIn(SingletonComponent::class)
abstract class RepositoryModule {

    @Singleton
    @Binds
    abstract fun bindAuthRepository(
        authRepositoryImpl: LoginRepositoryImpl
    ): LoginRepository

}