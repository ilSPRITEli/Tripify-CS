/*
  Warnings:

  - The values [EDITOR,VIEWER] on the enum `TripMemberRole` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `targetType` on the `Rating` table. All the data in the column will be lost.
  - You are about to drop the column `templateId` on the `Rating` table. All the data in the column will be lost.
  - You are about to drop the column `visibility` on the `Trip` table. All the data in the column will be lost.
  - You are about to drop the column `inviteCode` on the `TripInvitation` table. All the data in the column will be lost.
  - You are about to drop the column `canRate` on the `TripMember` table. All the data in the column will be lost.
  - You are about to drop the column `isProfilePublic` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastSeenAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `AchievementDefinition` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Notification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `NotificationDelivery` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PublicTemplate` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PushSubscription` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ScheduledReminder` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TemplateCloneEvent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TemplateDay` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TemplateItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TripActivityLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TripCountryVisit` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserAchievement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserAchievementProgress` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId,tripId]` on the table `Rating` will be added. If there are existing duplicate values, this will fail.
  - Made the column `tripId` on table `Rating` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TripMemberRole_new" AS ENUM ('OWNER', 'MEMBER');
ALTER TABLE "public"."TripMember" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "TripMember" ALTER COLUMN "role" TYPE "TripMemberRole_new" USING ("role"::text::"TripMemberRole_new");
ALTER TYPE "TripMemberRole" RENAME TO "TripMemberRole_old";
ALTER TYPE "TripMemberRole_new" RENAME TO "TripMemberRole";
DROP TYPE "public"."TripMemberRole_old";
ALTER TABLE "TripMember" ALTER COLUMN "role" SET DEFAULT 'MEMBER';
COMMIT;

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_tripId_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_userId_fkey";

-- DropForeignKey
ALTER TABLE "NotificationDelivery" DROP CONSTRAINT "NotificationDelivery_notificationId_fkey";

-- DropForeignKey
ALTER TABLE "NotificationDelivery" DROP CONSTRAINT "NotificationDelivery_userId_fkey";

-- DropForeignKey
ALTER TABLE "PublicTemplate" DROP CONSTRAINT "PublicTemplate_publishedById_fkey";

-- DropForeignKey
ALTER TABLE "PublicTemplate" DROP CONSTRAINT "PublicTemplate_sourceTripId_fkey";

-- DropForeignKey
ALTER TABLE "PushSubscription" DROP CONSTRAINT "PushSubscription_userId_fkey";

-- DropForeignKey
ALTER TABLE "Rating" DROP CONSTRAINT "Rating_templateId_fkey";

-- DropForeignKey
ALTER TABLE "ScheduledReminder" DROP CONSTRAINT "ScheduledReminder_itineraryItemId_fkey";

-- DropForeignKey
ALTER TABLE "ScheduledReminder" DROP CONSTRAINT "ScheduledReminder_tripId_fkey";

-- DropForeignKey
ALTER TABLE "ScheduledReminder" DROP CONSTRAINT "ScheduledReminder_userId_fkey";

-- DropForeignKey
ALTER TABLE "TemplateCloneEvent" DROP CONSTRAINT "TemplateCloneEvent_clonedByUserId_fkey";

-- DropForeignKey
ALTER TABLE "TemplateCloneEvent" DROP CONSTRAINT "TemplateCloneEvent_templateId_fkey";

-- DropForeignKey
ALTER TABLE "TemplateDay" DROP CONSTRAINT "TemplateDay_templateId_fkey";

-- DropForeignKey
ALTER TABLE "TemplateItem" DROP CONSTRAINT "TemplateItem_templateDayId_fkey";

-- DropForeignKey
ALTER TABLE "TripActivityLog" DROP CONSTRAINT "TripActivityLog_actorUserId_fkey";

-- DropForeignKey
ALTER TABLE "TripActivityLog" DROP CONSTRAINT "TripActivityLog_tripId_fkey";

-- DropForeignKey
ALTER TABLE "TripCountryVisit" DROP CONSTRAINT "TripCountryVisit_tripId_fkey";

-- DropForeignKey
ALTER TABLE "TripCountryVisit" DROP CONSTRAINT "TripCountryVisit_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserAchievement" DROP CONSTRAINT "UserAchievement_achievementId_fkey";

-- DropForeignKey
ALTER TABLE "UserAchievement" DROP CONSTRAINT "UserAchievement_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserAchievementProgress" DROP CONSTRAINT "UserAchievementProgress_achievementId_fkey";

-- DropForeignKey
ALTER TABLE "UserAchievementProgress" DROP CONSTRAINT "UserAchievementProgress_userId_fkey";

-- DropIndex
DROP INDEX "Rating_templateId_idx";

-- DropIndex
DROP INDEX "Rating_userId_idx";

-- DropIndex
DROP INDEX "Trip_visibility_idx";

-- DropIndex
DROP INDEX "TripInvitation_inviteCode_key";

-- AlterTable
ALTER TABLE "Rating" DROP COLUMN "targetType",
DROP COLUMN "templateId",
ALTER COLUMN "tripId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Trip" DROP COLUMN "visibility",
ADD COLUMN     "templatePublishedAt" TIMESTAMP(3),
ADD COLUMN     "templateUseCount" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "TripInvitation" DROP COLUMN "inviteCode";

-- AlterTable
ALTER TABLE "TripMember" DROP COLUMN "canRate",
ALTER COLUMN "role" SET DEFAULT 'MEMBER';

-- AlterTable
ALTER TABLE "User" DROP COLUMN "isProfilePublic",
DROP COLUMN "lastSeenAt";

-- DropTable
DROP TABLE "AchievementDefinition";

-- DropTable
DROP TABLE "Notification";

-- DropTable
DROP TABLE "NotificationDelivery";

-- DropTable
DROP TABLE "PublicTemplate";

-- DropTable
DROP TABLE "PushSubscription";

-- DropTable
DROP TABLE "ScheduledReminder";

-- DropTable
DROP TABLE "TemplateCloneEvent";

-- DropTable
DROP TABLE "TemplateDay";

-- DropTable
DROP TABLE "TemplateItem";

-- DropTable
DROP TABLE "TripActivityLog";

-- DropTable
DROP TABLE "TripCountryVisit";

-- DropTable
DROP TABLE "UserAchievement";

-- DropTable
DROP TABLE "UserAchievementProgress";

-- DropEnum
DROP TYPE "AchievementCategory";

-- DropEnum
DROP TYPE "AchievementConditionType";

-- DropEnum
DROP TYPE "NotificationChannel";

-- DropEnum
DROP TYPE "NotificationDeliveryStatus";

-- DropEnum
DROP TYPE "NotificationType";

-- DropEnum
DROP TYPE "RatingTargetType";

-- DropEnum
DROP TYPE "ReminderStatus";

-- DropEnum
DROP TYPE "ReminderType";

-- DropEnum
DROP TYPE "TemplateStatus";

-- DropEnum
DROP TYPE "TripVisibility";

-- CreateIndex
CREATE UNIQUE INDEX "Rating_userId_tripId_key" ON "Rating"("userId", "tripId");

-- CreateIndex
CREATE INDEX "Trip_isTemplatePublished_idx" ON "Trip"("isTemplatePublished");
