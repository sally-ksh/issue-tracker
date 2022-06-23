package com.team1.issuetracker.common

import android.graphics.Color
import java.util.*

class LabelColor {

    fun getLabelColor(red: Int, green: Int, blue: Int) = Color.argb(255, red, green, blue)

    fun getColorLabel(red: Int, green: Int, blue: Int) = String.format("#%02x%02x%02x", red, green, blue)

}