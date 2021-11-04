#!/usr/bin/env python3
"""Async Generator"""
import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[int, None, None]:
    """yields a random number between 0 and 10"""
    for _ in range(10):
        await asyncio.sleep(1)
        r = random.uniform(0, 10)
        yield r
