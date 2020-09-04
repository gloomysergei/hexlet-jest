test:
	suppressor pass 'npm test -s'
	FUNCTION_VERSION=wrong1 suppressor fail 'npm test -s'
	FUNCTION_VERSION=wrong2 suppressor fail 'npm test -s'
	FUNCTION_VERSION=wrong3 suppressor fail 'npm test -s'
.PHONY: test