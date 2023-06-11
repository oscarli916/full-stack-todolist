FROM python:3.10-slim-buster

# Install Poetry
RUN apt-get update \
    && apt-get install curl -y \
    && curl -sSL https://install.python-poetry.org | python -
ENV PATH="/root/.local/bin:$PATH"

WORKDIR /app
COPY ./app/poetry.lock ./app/pyproject.toml ./
RUN poetry config virtualenvs.in-project true
RUN poetry install

COPY ./app /app
# COPY ./wait-for-it.sh /app