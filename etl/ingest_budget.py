def ingest_budget(source_path: str):
    return {
        'status': 'stub',
        'source': source_path,
        'next': ['parse', 'normalize', 'validate']
    }

if __name__ == '__main__':
    print(ingest_budget('budget.pdf'))
