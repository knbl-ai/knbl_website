import sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

with open('public/webinar-bundle.html', 'r', encoding='utf-8') as f:
    c = f.read()

# Find .pill CSS
for term in ['.pill {', '.pill{', '.sep {', '.hero__sub {', '.hero__inner {']:
    idx = c.find(term)
    if idx != -1:
        print(f'"{term}":')
        print(repr(c[idx:idx+250]))
        print()
