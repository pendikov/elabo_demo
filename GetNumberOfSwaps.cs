using System;
using System.Collections.Generic;
using System.Linq;

public class Program
{
    public static int GetNumberOfSwaps(List<int> chips)
    {
        var a = chips;

        if (a.Count == 0)
        {
            return 0;
        }

        var total = a.Sum();

        if (total % a.Count != 0)
        {
            return -1;
        }

        var mean = (double)total / (double)a.Count;
        var s = new List<double>();

        for (int index = 0; index < a.Count; index++)
        {
            s.Add((index > 0 ? s[index - 1] : 0) + (a[index] - mean));
        }

        var median = s.OrderBy(x => x).ElementAt(s.Count / 2);
        return (int)s.Sum(val => Math.Abs(val - median));
    }
}