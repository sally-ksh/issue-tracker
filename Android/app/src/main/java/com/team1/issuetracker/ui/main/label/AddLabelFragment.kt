package com.team1.issuetracker.ui.main.label

import android.graphics.Color
import android.graphics.drawable.GradientDrawable
import android.os.Bundle
import android.text.Editable
import android.text.TextWatcher
import android.util.Log
import android.view.KeyEvent
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import android.widget.Toast
import androidx.core.content.ContextCompat
import androidx.fragment.app.Fragment
import com.team1.issuetracker.R
import com.team1.issuetracker.common.LabelColor
import com.team1.issuetracker.databinding.FragmentAddLabelBinding
import java.util.*

class AddLabelFragment : Fragment() {

    private lateinit var binding: FragmentAddLabelBinding

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        binding = FragmentAddLabelBinding.inflate(layoutInflater)
        val view = binding.root
        return view
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        binding.topAppBar.menu.getItem(0).isEnabled = false

        setClickSaveButton()
        changeTitle()
        setColorChangeButton()
        getDescription()
        getLabelColor()
//        getLabel()
    }

    private fun setClickSaveButton() {
        binding.topAppBar.setOnMenuItemClickListener {
            when (it.itemId) {
                R.id.action_save -> {
                    Log.d(
                        "TAG",
                        "setOnMenuItemClickListener  ${binding.topAppBar.menu.getItem(0).isEnabled}"
                    )
                    true
                }
                else -> {
                    false
                }

            }
        }
    }

    private fun changeTitle() {
        binding.etTitle.addTextChangedListener(object : TextWatcher {
            override fun beforeTextChanged(p0: CharSequence?, p1: Int, p2: Int, p3: Int) {
                Log.d("TAG", "changeTitle beforeTextChanged")
            }

            override fun onTextChanged(text: CharSequence?, start: Int, before: Int, count: Int) {
                when {
                    text.toString() != "" -> {
                        Log.d("TAG", "binding.etTitle.text ${text}, $start, $before, $count")
                        binding.topAppBar.menu.getItem(0).isEnabled = true
                    }
                    text.toString() == "" -> {
                        Log.d("TAG", "blank ${text}, $start, $before, $count")
                        binding.topAppBar.menu.getItem(0).isEnabled = false
                    }
                }
            }

            override fun afterTextChanged(text: Editable?) {
                binding.badgeLabel.text = text.toString()
                setLabelBackground()
            }

        })
    }

    private fun getDescription() {
        binding.etDescription.addTextChangedListener(object : TextWatcher {
            override fun beforeTextChanged(p0: CharSequence?, p1: Int, p2: Int, p3: Int) {
                Log.d("TAG", "getDescription beforeTextChanged")
            }

            override fun onTextChanged(text: CharSequence?, start: Int, before: Int, count: Int) {
                Log.d("TAG", "getDescription beforeTextChanged")
            }

            override fun afterTextChanged(text: Editable?) {
                //viewModel에 넘겨준다
            }

        })
    }

    private fun getLabelColor() {
        binding.etBackground.addTextChangedListener(object : TextWatcher {
            override fun beforeTextChanged(p0: CharSequence?, p1: Int, p2: Int, p3: Int) {
                Log.d("TAG", "getLabelColor beforeTextChanged")
            }

            override fun onTextChanged(text: CharSequence?, start: Int, before: Int, count: Int) {
                Log.d("TAG", "getLabelColor beforeTextChanged")
            }

            override fun afterTextChanged(text: Editable?) {
                //viewModel에 넘겨준다
                getLabel(text.toString())
            }

        })
    }

    private fun getLabel(text: String) {
        binding.etBackground.onFocusChangeListener =
            View.OnFocusChangeListener { _, focus ->
                if (!focus) {
                    kotlin.runCatching {
                        Color.parseColor(text)
                    }.onSuccess {
                        val shape = ContextCompat.getDrawable(
                            requireContext(),
                            R.drawable.badge_shape
                        ) as GradientDrawable
                        shape.setColor(it)
                        binding.badgeLabel.background = shape
                        Log.d("TAG", "success")
                    }.onFailure {
                        Toast.makeText(requireContext(), "올바른 색을 입력해주세요", Toast.LENGTH_SHORT).show()
                        Log.d("TAG", "fail")

                    }
                }
            }
    }

    private fun setColorChangeButton() {
        binding.btnColorChange.setOnClickListener {
            setLabelBackground()
        }
    }

    private fun setLabelBackground() {
        val random = Random()

        val red = random.nextInt(256)
        val green = random.nextInt(256)
        val blue = random.nextInt(256)

        val color = LabelColor()
        val shape =
            ContextCompat.getDrawable(requireContext(), R.drawable.badge_shape) as GradientDrawable

        shape.setColor(color.getLabelColor(red, green, blue))
        binding.badgeLabel.background = shape
        binding.etBackground.setText(color.getColorLabel(red, green, blue))
    }

}