using System;

public class Program
{
    public static int GetNumberOfSwaps(int[] chips)
    {
        int numMoves = 0;
        int total = 0;
        int count = chips.Length;
        int minIndex = 0;
        int maxIndex = 0;

        int[] updatedChips = new int[count];

        if (count == 0)
        {
            return 0;
        }

        for (int i = 0; i < chips.Length; i++)
        {
            total += chips[i];
            if (chips[i] < chips[minIndex])
            {
                minIndex = i;
            }
            if (chips[i] > chips[maxIndex])
            {
                maxIndex = i;
            }
            updatedChips[i] = chips[i];
        }

        if (total % count != 0)
        {
            return -1;
        }

        if (updatedChips[maxIndex] == updatedChips[minIndex])
        {
            return 0;
        }

        while (maxIndex != minIndex)
        {
            if (minIndex < maxIndex)
            {
                if (maxIndex - minIndex > count / 2)
                {
                    updatedChips[maxIndex] -= 1;
                    maxIndex = (maxIndex < count - 1) ? maxIndex + 1 : 0;
                    updatedChips[maxIndex] += 1;
                }
                else
                {
                    updatedChips[maxIndex] -= 1;
                    maxIndex = (maxIndex > 0) ? maxIndex - 1 : count - 1;
                    updatedChips[maxIndex] += 1;
                }
            }
            else
            {
                if (minIndex - maxIndex < count / 2)
                {
                    updatedChips[maxIndex] -= 1;
                    maxIndex = (maxIndex < count - 1) ? maxIndex + 1 : 0;
                    updatedChips[maxIndex] += 1;
                }
                else
                {
                    updatedChips[maxIndex] -= 1;
                    maxIndex = (maxIndex > 0) ? maxIndex - 1 : count - 1;
                    updatedChips[maxIndex] += 1;
                }
            }

            numMoves += 1;
            minIndex = 0;
            maxIndex = 0;

            for (int i = 0; i < count; i++)
            {
                if (updatedChips[i] < updatedChips[minIndex])
                {
                    minIndex = i;
                }
                if (updatedChips[i] > updatedChips[maxIndex])
                {
                    maxIndex = i;
                }
            }
        }

        return numMoves;
    }
}