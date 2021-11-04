#!/usr/bin/env python3
"""Basic annotations"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Returns a function
    """
    def mult(m):
        """Multiplies a float by another float
        """
        return m * multiplier
    return mult
