#!/usr/bin/env python3
"""Basic annotations"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Returns a tuple (k,v)
    """
    return (k, v ** 2)
