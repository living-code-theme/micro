-- Native micro plugin loader. Registers themes only; never changes the selected colorscheme.
VERSION = "0.1.0"
local config = import("micro/config")
config.AddRuntimeFile("livingcode", config.RTColorscheme, "themes/living-code-night.micro")
config.AddRuntimeFile("livingcode", config.RTColorscheme, "themes/living-code-frost.micro")
config.AddRuntimeFile("livingcode", config.RTColorscheme, "themes/living-code-paper.micro")
config.AddRuntimeFile("livingcode", config.RTColorscheme, "themes/living-code-signal.micro")
