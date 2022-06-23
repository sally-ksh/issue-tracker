package com.team1.issuetracker.data.di

import com.team1.issuetracker.data.model.Milestone
import com.team1.issuetracker.data.repository.*
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

    @Singleton
    @Binds
    abstract fun bindLabelRepository(
        labelRepositoryImpl: LabelRepositoryImpl
    ): LabelRepository

    @Singleton
    @Binds
    abstract fun bindMilestoneRepository(
        milestoneRepositoryImpl: MilestoneRepositoryImpl
    ): MilestoneRepository
}