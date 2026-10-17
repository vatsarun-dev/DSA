class Solution {
public:
    int minSwaps(vector<int>& nums) {
        int n = nums.size();

        auto digitSum = [](int num) {
            int sum = 0;
            while (num > 0) {
                sum += num % 10;
                num /= 10;
            }
            return sum;
        };

        vector<pair<int, int>> arr;

        for (int num : nums) {
            arr.push_back({digitSum(num), num});
        }

        sort(arr.begin(), arr.end());

        unordered_map<int, int> targetIndex;
        for (int i = 0; i < n; i++) {
            targetIndex[arr[i].second] = i;
        }

        vector<bool> visited(n, false);
        int swaps = 0;

        for (int i = 0; i < n; i++) {
            if (visited[i] || targetIndex[nums[i]] == i) {
                continue;
            }

            int j = i;
            int cycleSize = 0;

            while (!visited[j]) {
                visited[j] = true;
                j = targetIndex[nums[j]];
                cycleSize++;
            }

            swaps += cycleSize - 1;
        }

        return swaps;
    }
};