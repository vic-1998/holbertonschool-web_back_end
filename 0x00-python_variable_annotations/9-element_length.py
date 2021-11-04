#!/usr/bin/env python3
"""Basic annotations"""
from typing import List, Tuple, Sequence, Iterable


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Returns the length of an interable"""
    return [(i, len(i)) for i in lst]
