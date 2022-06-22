package com.team1.issuetracker.data.di

import com.team1.issuetracker.data.datasource.LabelDataSource
import com.team1.issuetracker.data.datasource.LabelDataSourceImpl
import com.team1.issuetracker.data.datasource.LoginDataSource
import com.team1.issuetracker.data.datasource.LoginDataSourceImpl
import dagger.Binds
import dagger.Module
import dagger.hilt.InstallIn
import dagger.hilt.components.SingletonComponent
import javax.inject.Singleton

@Module
@InstallIn(SingletonComponent::class)
abstract class DataSourceModule {

    @Singleton
    @Binds
    abstract fun bindAuthDataSource(
        authDataSourceImpl: LoginDataSourceImpl
    ): LoginDataSource

    @Singleton
    @Binds
    abstract fun bindLabelDataSource(
        labelDataSourceImpl: LabelDataSourceImpl
    ): LabelDataSource

}